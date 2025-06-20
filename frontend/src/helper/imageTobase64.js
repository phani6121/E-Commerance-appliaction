const imageToBase64 = async(image) =>{
    const reader = new FileReader()
    // This creates a new instance of the FileReader API, which allows web browsers to read files stored on the user's computer. The FileReader object provides methods to read the contents of files asynchronously. In this case, the reader object will be used to read the image file.

    reader.readAsDataURL(image)
    // This tells the FileReader to start reading the contents of the provided image file as a Data URL.A Data URL is a base64 - encoded string representation of the file's content. Once the file is read successfully, this triggers the onload event handler of reader.

    const data= await new Promise((resolve,reject)=>{
        reader.onload =()=> resolve(reader.result)
        // This sets up an onload event handler for the FileReader.When the FileReader finishes reading the image file, the onload event is triggered.The handler calls resolve(reader.result), which resolves the promise with the reader.result.The result is the base64 - encoded string of the image.

        reader.onerror= error => reject(error)
        // This sets up an onerror event handler for the FileReader.If there's an error while reading the image file, this handler is triggered. It calls reject(error), which rejects the promise and passes the error as the rejection reason. 
    })
    return data 
}
export default imageToBase64;