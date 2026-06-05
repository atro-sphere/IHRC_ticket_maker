import qrcode
import qrcode.image.svg

qr1 = qrcode.QRCode(border=0)
qr1.add_data("https://www.instagram.com/horseracing_icu/")

qr2 = qrcode.QRCode(border=0)
qr2.add_data("https://x.com/horseracing_icu")

qr1.make()
qr2.make()

img1 = qr1.make_image(image_factory=qrcode.image.svg.SvgImage)
img1.save("./img/qr1.svg")

img2 = qr2.make_image(image_factory=qrcode.image.svg.SvgImage)
img2.save("./img/qr2.svg")