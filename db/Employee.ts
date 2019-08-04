/**
 SELECT `employees`.`emp_no`,
 `employees`.`birth_date`,
 `employees`.`first_name`,
 `employees`.`last_name`,
 `employees`.`gender`,
 `employees`.`hire_date`
 FROM `employees`.`employees`;
 */

import {
  Entity,
  Column,
  PrimaryColumn
} from "typeorm";

@Entity('employees')
export class Employee {
  @PrimaryColumn()
  emp_no: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  gender: number;
  @Column()
  hire_date: string;
  //
  // @OneToMany(type => Salary, salary => salary.employee)
  // salaries: Salary[];
}
