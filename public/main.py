from bs4 import BeautifulSoup
from PIL import Image, ImageDraw, ImageFont
import requests
import pymongo

# Cấu hình kết nối localhost
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
# Tạo cơ sở dữ liệu
mydb = myclient["mydatabase"]
# Tạo bảng admin
adminCol = mydb["admin"]
# Tạo bảng news
newsCol = mydb["news"]


# def config():

#     content = "\xe1 Ngày 28-3, Phòng cảnh sát quản lý hành chính về trật tự xã hội Công an TP.HCM (PC06) ra thông báo tạm dừng việc tiếp nhận hồ sơ cấp căn cước công dân (CCCD) gắn chip điện tử tại trụ sở của phòng ở địa chỉ số 459 Trần Hưng Đạo, phường Cầu Kho (quận 1, TP.HCM) kể từ ngày 29-3-2021. Việc trở lại tiếp nhận hồ sơ cấp CCCD tại trụ sở PC06 sẽ thông báo sau.Lý do của việc tạm dừng tiếp nhận hồ sơ là để tăng cường nguồn lực cho Công an TP Thủ Đức và các quận, huyện."
#     title = "\xe1 TP.HCM: Từ ngày 29-3, chỉ nhận hồ sơ cấp CCCD gắn chip tại công an quận, huyện và TP Thủ Đức"
#     a = content.encode()
#     b = title.encode()
#     admin = {"name": "Vo Viet Dung",
#              "username": "admin", "password": "12345678"}

#     x = adminCol.insert_one(admin)
#     y = newsCol.insert_one(firstNews)
#     print(a.decode())
#     print(b.decode())


def crawNewsData(baseUrl, url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    titles = soup.findAll('h3', class_='title-news')
    links = [link.find('a').attrs["href"] for link in titles]
    data = []
    for link in links:
        news = requests.get(baseUrl + link)
        soup = BeautifulSoup(news.content, "html.parser")
        title = soup.find("h1", class_="article-title").text
        abstract = soup.find("h2", class_="sapo").text
        body = soup.find("div", id="main-detail-body")
        content = ""
        News = {"link": link,
                "title": title.encode(),
                "abstract": abstract.encode(),
                "body": body.encode(),
                "content": content.encode()}
        newsCol.insert_one(News)
        try:
            content = body.findChildren("p", recursive=False)[
                0].text + body.findChildren("p", recursive=False)[1].text
        except:
            content = ""
        image = body.find("img").attrs["src"]
        data.append({
            "title": title,
            "abstract": abstract,
            "content": content,
            "image": image,
        })
        print("craw " + title)
        # print("content" + content)
    return data


def writeToImage(image, text, position, font, color, maxLine):
    charPerLine = 650 // font.getsize('x')[0]
    pen = ImageDraw.Draw(image)
    yStart = position[1]
    xStart = position[0]
    point = 0
    prePoint = 0
    while point < len(text):
        prePoint = point
        point += charPerLine
        while point < len(text) and text[point] != " ":
            point -= 1
        pen.text((xStart, yStart), text[prePoint:point], font=font, fill=color)
        yStart += font.getsize('hg')[1]
        maxLine -= 1
        if (maxLine == 0):
            if (point < len(text)):
                pen.text((xStart, yStart), "...", font=font, fill="black")
            break


def makeFastNews(data):
    for index, item in enumerate(data):
        # make new image and tool to draw
        image = Image.new('RGB', (650, 750), color="white")
        pen = ImageDraw.Draw(image)
        # load image from internet => resize => paste to main image
        pen.rectangle(((0, 0), (650, 300)), fill="grey")
        newsImage = Image.open(requests.get(item["image"], stream=True).raw)
        newsImage.thumbnail((650, 300), Image.ANTIALIAS)
        image.paste(newsImage, (650 // 2 - newsImage.width //
                                2, 300 // 2 - newsImage.height//2))
        # write title
        titleFont = ImageFont.truetype("font/arial.ttf", 22)
        writeToImage(image, item["title"], (10, 310), titleFont, "black", 3)
        abstractFont = ImageFont.truetype("font/arial.ttf", 15)
        writeToImage(image, item["abstract"],
                     (10, 390), abstractFont, "gray", 4)
        contentFont = ImageFont.truetype("font/arial.ttf", 20)
        writeToImage(image, item["content"],
                     (10, 460), contentFont, "black", 11)
        name = "news-" + str(index) + ".png"
        image.save("news/" + name)
        print("saved to " + "news/" + name)


if __name__ == "__main__":
    makeFastNews(crawNewsData("https://tuoitre.vn",
                              "https://tuoitre.vn/tin-moi-nhat.htm"))
