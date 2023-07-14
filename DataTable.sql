-- 1st table: Patient
CREATE TABLE Patient (
  id INT PRIMARY KEY,
  patientid INT,
  patientname VARCHAR(255),
  age INT,
  sex VARCHAR(10),
  BirthDate DATE,
  BirthTime TIME
);


-- 2nd table: Study
CREATE TABLE Study (
  StudyInstanceUid int PRIMARY KEY,
  StudyDate DATE,
  StudyTime TIME,
  AccessionNumber INT,
  StudyID INT,
  StudyDescription VARCHAR(255),
  ReferringPhysiciansName VARCHAR(255),
  PerformingPhysiciansName VARCHAR(255),
  FOREIGN KEY (StudyInstanceUid) REFERENCES Patient(id)
);

-- 3rd table: Series
CREATE TABLE Series (
  seriesInstanceUID int PRIMARY KEY,
  Modality VARCHAR(50),
  SeriesNumber INT,
  SeriesDate DATE,
  SeriesTime TIME,
  BodyPartExamined VARCHAR(100),
  SeriesDescription VARCHAR(255),
  FOREIGN KEY (seriesInstanceUID) REFERENCES Study(StudyInstanceUid)
);

-- 4th table: Image
CREATE TABLE Image (
  SOPInstanceUID int PRIMARY KEY,
  instanceNumber INT,
  SOPClassUID VARCHAR(255),
  TransferSyntaxUID VARCHAR(255),
  FileUrl VARCHAR(255),
  seriesInstanceUID VARCHAR(255),
  FOREIGN KEY (SOPInstanceUID) REFERENCES Series(seriesInstanceUID)
);

-- Sample data for Patient table
INSERT INTO Patient (id, patientid, patientname, age, sex, BirthDate, BirthTime)
VALUES
  (1, 1001, 'John Doe', 30, 'Male', '1990-01-01', '08:00:00'),
  (2, 1002, 'Jane Smith', 45, 'Female', '1978-05-15', '14:30:00');

-- Sample data for Study table
INSERT INTO Study (StudyInstanceUid, StudyDate, StudyTime, AccessionNumber, StudyID, StudyDescription, ReferringPhysiciansName, PerformingPhysiciansName)
VALUES
  (1, '2023-07-01', '10:15:00', 12345, 1001, 'Abdominal CT Scan', 'Dr. Smith', 'Dr. Johnson'),
  (2, '2023-07-02', '14:30:00', 54321, 1002, 'Chest X-Ray', 'Dr. Brown', 'Dr. Davis');

-- Sample data for Series table
INSERT INTO Series (seriesInstanceUID, Modality, SeriesNumber, SeriesDate, SeriesTime, BodyPartExamined, SeriesDescription)
VALUES
  (1, 'CT', 1, '2023-07-01', '10:30:00', 'Abdomen', 'Abdomen CT Series'),
  (2, 'X-ray', 1, '2023-07-02', '14:45:00', 'Chest', 'Chest X-Ray Series');

-- Sample data for Image table
INSERT INTO Image (SOPInstanceUID, instanceNumber, SOPClassUID, TransferSyntaxUID, FileUrl, seriesInstanceUID)
VALUES
  (1, 1, 'CT Image Class', 'TransferSyntax001', 'http://example.com/image001.jpg', 1),
  (2, 2, 'X-ray Image Class', 'TransferSyntax002', 'http://example.com/image002.jpg', 2);
