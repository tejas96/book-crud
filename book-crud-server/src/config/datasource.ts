import { DataSource } from 'typeorm';
import { ormConfig } from './ormConfig';

// Export the DataSource instance directly
const dataSource = new DataSource(ormConfig);

export default dataSource;
