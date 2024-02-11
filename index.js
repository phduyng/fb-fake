// const fileUpload = document.getElementById('file-upload');

// const reader = new FileReader;

// const imageGrid = document.getElementById('imageGrid')

// fileUpload.addEventListener('change', event => {
//   const files = event.target.files;
//   console.log('file: ', files)
//   const file = files[0]
//   reader.readAsDataURL(file)
  
//   reader.addEventListener('load', event => {
//     const img = document.createElement('img')
//     imageGrid.appendChild(img);
//     img.src = event.target.result
//     img.alt = file.name
//   })
// })
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
   if (obj.hasOwnProperty(key)) { // Kiểm tra xem key có phải là thuộc tính của obj hay không
       console.log(key + ": " + obj[key]);
   }
}
