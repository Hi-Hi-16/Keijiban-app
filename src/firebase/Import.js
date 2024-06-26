// Reference to the path where you want to read data
const reference = database.ref('path/to/your/data');

// Read data
reference.once('value')
.then((snapshot) => {
  const data = snapshot.val();
  console.log("Data read successfully:", data);
})
.catch((error) => {
  console.error("Error reading data: ", error);
});
