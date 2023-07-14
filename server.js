const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse incoming JSON data
app.use(bodyParser.json());

// Define your API routes and handlers
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Endpoint to get all records from the Patient table
app.get("/api/patients", (req, res) => {
  // Retrieve data from the Patient table
  // Replace with your database query or ORM operation
  const patients = [
    {
      id: 1,
      patientid: 1001,
      patientname: "John Doe",
      age: 30,
      sex: "Male",
      BirthDate: "1990-01-01",
      BirthTime: "08:00:00",
    },
    {
      id: 2,
      patientid: 1002,
      patientname: "Jane Smith",
      age: 45,
      sex: "Female",
      BirthDate: "1978-05-15",
      BirthTime: "14:30:00",
    },
  ];

  res.json(patients);
});

// Endpoint to get all records from the Study table
app.get("/api/studies", (req, res) => {
  // Retrieve data from the Study table
  // Replace with your database query or ORM operation
  const studies = [
    {
      StudyInstanceUid: "UID001",
      StudyDate: "2023-07-01",
      StudyTime: "10:15:00",
      AccessionNumber: 12345,
      StudyID: 1001,
      StudyDescription: "Abdominal CT Scan",
      ReferringPhysiciansName: "Dr. Smith",
      PerformingPhysiciansName: "Dr. Johnson",
    },
    {
      StudyInstanceUid: "UID002",
      StudyDate: "2023-07-02",
      StudyTime: "14:30:00",
      AccessionNumber: 54321,
      StudyID: 1002,
      StudyDescription: "Chest X-Ray",
      ReferringPhysiciansName: "Dr. Brown",
      PerformingPhysiciansName: "Dr. Davis",
    },
  ];

  res.json(studies);
});

// Endpoint to get all records from the Series table
app.get("/api/series", (req, res) => {
  // Retrieve data from the Series table
  // Replace with your database query or ORM operation
  const series = [
    {
      seriesInstanceUID: "SeriesUID001",
      Modality: "CT",
      SeriesNumber: 1,
      SeriesDate: "2023-07-01",
      SeriesTime: "10:30:00",
      BodyPartExamined: "Abdomen",
      SeriesDescription: "Abdomen CT Series",
    },
    {
      seriesInstanceUID: "SeriesUID002",
      Modality: "X-ray",
      SeriesNumber: 1,
      SeriesDate: "2023-07-02",
      SeriesTime: "14:45:00",
      BodyPartExamined: "Chest",
      SeriesDescription: "Chest X-Ray Series",
    },
  ];

  res.json(series);
});

// Endpoint to get all records from the Image table
app.get("/api/images", (req, res) => {
  // Retrieve data from the Image table
  // Replace with your database query or ORM operation
  const images = [
    {
      SOPInstanceUID: "ImageUID001",
      instanceNumber: 1,
      SOPClassUID: "CT Image Class",
      TransferSyntaxUID: "TransferSyntax001",
      FileUrl: "http://example.com/image001.jpg",
      seriesInstanceUID: "SeriesUID001",
    },
    {
      SOPInstanceUID: "ImageUID002",
      instanceNumber: 2,
      SOPClassUID: "X-ray Image Class",
      TransferSyntaxUID: "TransferSyntax002",
      FileUrl: "http://example.com/image002.jpg",
      seriesInstanceUID: "SeriesUID002",
    },
  ];

  res.json(images);
});

// Endpoint to get a specific patient by ID
app.get("/api/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Retrieve data from the Patient table by ID
  // Replace with your database query or ORM operation
  const patient = {
    id: 1,
    patientid: 1001,
    patientname: "John Doe",
    age: 30,
    sex: "Male",
    BirthDate: "1990-01-01",
    BirthTime: "08:00:00",
  };

  res.json(patient);
});

// Endpoint to get a specific study by ID
app.get("/api/studies/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Retrieve data from the Study table by ID
  // Replace with your database query or ORM operation
  const study = {
    StudyInstanceUid: "UID001",
    StudyDate: "2023-07-01",
    StudyTime: "10:15:00",
    AccessionNumber: 12345,
    StudyID: 1001,
    StudyDescription: "Abdominal CT Scan",
    ReferringPhysiciansName: "Dr. Smith",
    PerformingPhysiciansName: "Dr. Johnson",
  };

  res.json(study);
});

// Endpoint to get a specific series by ID
app.get("/api/series/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Retrieve data from the Series table by ID
  // Replace with your database query or ORM operation
  const series = {
    seriesInstanceUID: "SeriesUID001",
    Modality: "CT",
    SeriesNumber: 1,
    SeriesDate: "2023-07-01",
    SeriesTime: "10:30:00",
    BodyPartExamined: "Abdomen",
    SeriesDescription: "Abdomen CT Series",
  };

  res.json(series);
});

// Endpoint to get a specific image by ID
app.get("/api/images/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Retrieve data from the Image table by ID
  // Replace with your database query or ORM operation
  const image = {
    SOPInstanceUID: "ImageUID001",
    instanceNumber: 1,
    SOPClassUID: "CT Image Class",
    TransferSyntaxUID: "TransferSyntax001",
    FileUrl: "http://example.com/image001.jpg",
    seriesInstanceUID: "SeriesUID001",
  };

  res.json(image);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
