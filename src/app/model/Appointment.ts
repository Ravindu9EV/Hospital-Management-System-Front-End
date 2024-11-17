export class Appointment {
  public id: number;
  public type: string;
  public qr: string;
  public dateTime: string;
  public description: string;
  public status: string;
  public roomNumber: string;
  public q_Number: number;
  public patientId: number;
  public adminId: number;

  constructor(
    id: number,
    type: string,
    qr: string,
    dateTime: string,
    description: string,
    status: string,
    roomNumber: string,
    q_Number: number,
    patientId: number,
    adminId: number
  ) {
    this.id = id;
    this.type = type;
    this.qr = qr;
    this.dateTime = dateTime;
    this.description = description;
    this.status = status;
    this.roomNumber = roomNumber;
    this.q_Number = q_Number;
    this.patientId = patientId;
    this.adminId = adminId;
  }

  public getId(): number {
    return this.id;
  }
  public getType(): string {
    return this.type;
  }
  public getQr(): string {
    return this.qr;
  }
  public getDateTime(): string {
    return this.dateTime;
  }
  public getDescription(): string {
    return this.description;
  }
  public getStatus(): string {
    return this.status;
  }
  public getRoomNumber(): string {
    return this.roomNumber;
  }
  public getQNumber(): number {
    return this.q_Number;
  }
  public getPatientId(): number {
    return this.patientId;
  }
  public getAdminId(): number {
    return this.adminId;
  }
}
