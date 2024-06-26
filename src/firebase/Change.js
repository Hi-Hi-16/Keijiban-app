// Reference to the path where you want to monitor data
const reference = database.ref('path/to/your/data');

// Listen for data changes
reference.on('value', (snapshot) => {
  const data = snapshot.val();
  console.log("Data changed:", data);
});
