import { NextApiRequest, NextApiResponse } from 'next';
import { createConnection, getConnection, getConnectionManager } from 'typeorm';
// import { Employee } from '../../db/Employee';
import config from '../../ormconfig.json';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Process your POST request
  } else {
    // Handle the rest of your HTTP methods
  }

  const cm = getConnectionManager();
  if (cm.connections.length === 0) {
    await createConnection(config as MysqlConnectionOptions);
  }


  const employeeWithSalary = await getConnection().query(
    'SELECT employee.*, salary.salary, salary.from_date, salary.to_date FROM employees employee LEFT JOIN salaries salary ON salary.emp_no = employee.emp_no LIMIT 100');
  console.log(employeeWithSalary);
  // let employeeRepository = await getConnection().getRepository(Employee);
  // const employeeWithSalary = await getConnection().query('SELECT employee.*, salary.salary, salary.from_date, salary.to_date FROM employees employee LEFT JOIN salaries salary ON salary.emp_no = employee.emp_no LIMIT 10');

  console.log(req.query);

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  await res.end(JSON.stringify({ name: employeeWithSalary }));
};