
const { Client, Storage, ID } = Appwrite;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67a6f65b002f61ba630e");

  const storage = new Storage(client); 

  const addPost = () => {
    const content = document.getElementById("content").value;
    const imageFile = document.getElementById("imageFile").files[0];
    if (!imageFile) {
      console.error("No file selected");
      return;
    }
    const promise = storage.createFile(
      '67a6fd3d0003b93a6a65', 
      ID.unique(), 
      imageFile 
    );
    promise.then(
      function (response) {
        console.log("File uploaded successfully:", response);
      },
      function (error) {
        console.error("Error uploading file:", error);
      }
    );
  };
const uploadImage = ()=>{
}
const button = document.createElement("post-btn");
button.addEventListener("click", addPost);

