import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('salaries')
export class Salary {
  @PrimaryColumn()
  emp_no: number;
  @Column()
  salary: number;
  @Column()
  from_date: Date;
  @Column()
  to_date: Date;

}
