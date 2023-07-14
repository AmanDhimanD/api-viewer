// Sample data for the "Patient" collection
db.Patient.insertMany([
  {
    "_id": 1,
    "patientid": 1001,
    "patientname": "John Doe",
    "age": 30,
    "sex": "Male",
    "BirthDate": ISODate("1990-01-01"),
    "BirthTime": ISODate("1970-01-01T08:00:00Z")
  },
  {
    "_id": 2,
    "patientid": 1002,
    "patientname": "Jane Smith",
    "age": 45,
    "sex": "Female",
    "BirthDate": ISODate("1978-05-15"),
    "BirthTime": ISODate("1970-01-01T14:30:00Z")
  }
]);

// Sample data for the "Study" collection
db.Study.insertMany([
  {
    "StudyInstanceUid": "UID001",
    "StudyDate": ISODate("2023-07-01"),
    "StudyTime": ISODate("1970-01-01T10:15:00Z"),
    "AccessionNumber": 12345,
    "StudyID": 1001,
    "StudyDescription": "Abdominal CT Scan",
    "ReferringPhysiciansName": "Dr. Smith",
    "PerformingPhysiciansName": "Dr. Johnson"
  },
  {
    "StudyInstanceUid": "UID002",
    "StudyDate": ISODate("2023-07-02"),
    "StudyTime": ISODate("1970-01-01T14:30:00Z"),
    "AccessionNumber": 54321,
    "StudyID": 1002,
    "StudyDescription": "Chest X-Ray",
    "ReferringPhysiciansName": "Dr. Brown",
    "PerformingPhysiciansName": "Dr. Davis"
  }
]);

// Sample data for the "Series" collection
db.Series.insertMany([
  {
    "seriesInstanceUID": "SeriesUID001",
    "Modality": "CT",
    "SeriesNumber": 1,
    "SeriesDate": ISODate("2023-07-01"),
    "SeriesTime": ISODate("1970-01-01T10:30:00Z"),
    "BodyPartExamined": "Abdomen",
    "SeriesDescription": "Abdomen CT Series",
    "StudyInstanceUid": "UID001"
  },
  {
    "seriesInstanceUID": "SeriesUID002",
    "Modality": "X-ray",
    "SeriesNumber": 1,
    "SeriesDate": ISODate("2023-07-02"),
    "SeriesTime": ISODate("1970-01-01T14:45:00Z"),
    "BodyPartExamined": "Chest",
    "SeriesDescription": "Chest X-Ray Series",
    "StudyInstanceUid": "UID002"
  }
]);

// Sample data for the "Image" collection
db.Image.insertMany([
  {
    "SOPInstanceUID": "ImageUID001",
    "instanceNumber": 1,
    "SOPClassUID": "CT Image Class",
    "TransferSyntaxUID": "TransferSyntax001",
    "FileUrl": "http://example.com/image001.jpg",
    "seriesInstanceUID": "SeriesUID001"
  },
  {
    "SOPInstanceUID": "ImageUID002",
    "instanceNumber": 2,
    "SOPClassUID": "X-ray Image Class",
    "TransferSyntaxUID": "TransferSyntax002",
    "FileUrl": "http://example.com/image002.jpg",
    "seriesInstanceUID": "SeriesUID002"
  }
]);
