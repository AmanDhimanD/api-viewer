const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

const dataFile = "./dataOfAPI.json";

// Helper function to read data from the JSON file
function readDataFromFile() {
  const rawData = fs.readFileSync(dataFile);
  return JSON.parse(rawData);
}

// Helper function to write data to the JSON file
function writeDataToFile(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

//Patients 🔥
// Endpoint to get all patients
app.get("/api/patients", (req, res) => {
  const data = readDataFromFile();
  res.json(data.patients);
});

// Endpoint to create a new patient
app.post("/api/patients", (req, res) => {
  const data = readDataFromFile();
  const newPatient = req.body;
  data.patients.push(newPatient);
  writeDataToFile(data);
  res.status(201).json(newPatient);
});

// Endpoint to get a specific patient by ID
app.get("/api/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readDataFromFile();
  const patient = data.patients.find((p) => p.id === id);

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.json(patient);
});

// Endpoint to update a specific patient by ID
app.put("/api/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readDataFromFile();
  const updatedPatient = req.body;
  data.patients = data.patients.map((p) => (p.id === id ? updatedPatient : p));
  writeDataToFile(data);
  res.json(updatedPatient);
});

// Endpoint to delete a specific patient by ID
app.delete("/api/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readDataFromFile();
  data.patients = data.patients.filter((p) => p.id !== id);
  writeDataToFile(data);
  res.json({ message: "Patient deleted successfully" });
});

//Studies 🔥🔥
// Endpoint to get all records from the Study table
app.get("/api/studies", (req, res) => {
  // Retrieve data from the Study table
  // Replace with your database query or ORM operation
  const data = readDataFromFile();
  res.json(data.studies);
});

// Endpoint to create a new record in the Study table
app.post("/api/studies", (req, res) => {
  // Retrieve data from the request body
  const data = readDataFromFile();
  const newStudy = req.body;
  // Replace the following logic with database insertion or ORM operation
  // For this example, we'll push the new study into the studies array
  data.studies.push(newStudy);
  writeDataToFile(data);
  res.status(201).json(newStudy);
});

// Endpoint to update a specific record in the Study table by StudyInstanceUid
app.put("/api/studies/:StudyInstanceUid", (req, res) => {
  // Retrieve StudyInstanceUid from the request parameters
  const { StudyInstanceUid } = req.params;

  // Retrieve updated data from the request body
  const updatedStudy = req.body;

  // Replace the following logic with database update or ORM operation
  // For this example, we'll find the study by StudyInstanceUid and update it
  const studyToUpdate = studies.find(
    (study) => study.StudyInstanceUid === StudyInstanceUid
  );
  if (!studyToUpdate) {
    return res.status(404).json({ message: "Study not found" });
  }

  Object.assign(studyToUpdate, updatedStudy);

  res.json(studyToUpdate);
});

// Endpoint to delete a specific record in the Study table by StudyInstanceUid
app.delete("/api/studies/:StudyInstanceUid", (req, res) => {
  const id = req.params.StudyInstanceUid;
  const data = readDataFromFile();
  data.studies = data.studies.filter((p) => p.StudyInstanceUid !== id);
  writeDataToFile(data);
  res.json({ message: "Study deleted successfully" });
  //   // Retrieve StudyInstanceUid from the request parameters
  //   const { StudyInstanceUid } = req.params;

  //   // Replace the following logic with database delete or ORM operation
  //   // For this example, we'll find the study by StudyInstanceUid and remove it
  //   const studyIndex = studies.findIndex(
  //     (study) => study.StudyInstanceUid === StudyInstanceUid
  //   );
  //   if (studyIndex === -1) {
  //     return res.status(404).json({ message: "Study not found" });
  //   }

  //   studies.splice(studyIndex, 1);

  //   res.json({ message: "Study deleted successfully" });
});

//Series 🔥🔥🔥

// Endpoint to get all records from the Series table
app.get("/api/series", (req, res) => {
  // Retrieve data from the Study table
  // Replace with your database query or ORM operation
  const data = readDataFromFile();
  res.json(data.studies);
});

// Endpoint to get a specific series by ID
app.get("/api/series/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Replace this with your database query or ORM operation
  const series = seriesData.find((s) => s.seriesInstanceUID === id);
  if (!series) {
    return res.status(404).json({ message: "Series not found" });
  }

  res.json(series);
});

// Endpoint to create a new series
app.post("/api/series", (req, res) => {
  const data = readDataFromFile();
  const newStudy = req.body;
  // Replace the following logic with database insertion or ORM operation
  // For this example, we'll push the new study into the studies array
  data.series.push(newStudy);
  writeDataToFile(data);
  res.status(201).json(newStudy);
});

// Endpoint to update a specific series by ID
app.put("/api/series/:id", (req, res) => {
  const id = req.params.id;
  const updatedSeries = req.body;

  const index = seriesData.findIndex((s) => s.seriesInstanceUID === id);
  if (index === -1) {
    return res.status(404).json({ message: "Series not found" });
  }

  seriesData[index] = { ...seriesData[index], ...updatedSeries };
  res.json(seriesData[index]);
});

// Endpoint to delete a specific series by ID
app.delete("/api/series/:id", (req, res) => {
  const id = req.params.id;

  const index = seriesData.findIndex((s) => s.seriesInstanceUID === id);
  if (index === -1) {
    return res.status(404).json({ message: "Series not found" });
  }

  const deletedSeries = seriesData.splice(index, 1);
  res.json(deletedSeries[0]);
});

//Images 🔥🔥🔥🔥
// Endpoint to get all records from the Image table
app.get("/api/images", (req, res) => {
  const id = parseInt(req.params.id);

  // Replace this with your database query or ORM operation
  const series = seriesData.find((s) => s.seriesInstanceUID === id);
  if (!series) {
    return res.status(404).json({ message: "images not found" });
  }

  res.json(series);
});

// Endpoint to create a new image
app.post("/api/images", (req, res) => {
  const data = readDataFromFile();
  const newStudy = req.body;
  // Replace the following logic with database insertion or ORM operation
  // For this example, we'll push the new study into the studies array
  data.images.push(newStudy);
  writeDataToFile(data);
  res.status(201).json(newStudy);
});

// Endpoint to update a specific image by SOPInstanceUID
app.put("/api/images/:SOPInstanceUID", (req, res) => {
  const SOPInstanceUID = req.params.SOPInstanceUID;
  const updatedImage = req.body;

  const index = imagesData.findIndex(
    (img) => img.SOPInstanceUID === SOPInstanceUID
  );
  if (index === -1) {
    return res.status(404).json({ message: "Image not found" });
  }

  imagesData[index] = { ...imagesData[index], ...updatedImage };
  res.json(imagesData[index]);
});

// Endpoint to delete a specific image by SOPInstanceUID
app.delete("/api/images/:SOPInstanceUID", (req, res) => {
  const SOPInstanceUID = req.params.SOPInstanceUID;

  const index = imagesData.findIndex(
    (img) => img.SOPInstanceUID === SOPInstanceUID
  );
  if (index === -1) {
    return res.status(404).json({ message: "Image not found" });
  }

  const deletedImage = imagesData.splice(index, 1);
  res.json(deletedImage[0]);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
