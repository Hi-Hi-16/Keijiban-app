// Reference to the path where you want to write data
const reference = database.ref('path/to/your/data');

// Write data
reference.set({
  username: "exampleUser",
  email: "user@example.com",
  profile_picture : "profilePictureUrl"
})
.then(() => {
  console.log("Data written successfully!");
})
.catch((error) => {
  console.error("Error writing data: ", error);
});
