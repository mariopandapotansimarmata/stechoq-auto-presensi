FROM node:16.20.2-alpine3.18

# Membuat direktori aplikasi pada container
WORKDIR /app
 
 # Memindahkan seluruh berkas ke dalam direktori container
COPY . .

# Menginstall dependency
RUN npm install
 
# Perintah untuk menjalankan aplikasi
CMD [ "node", "app.js" ]
