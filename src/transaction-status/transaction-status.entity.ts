import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Transaction } from '../transaction/transaction.entity';

@Table
export class TransactionStatus extends Model {
	@Column({ primaryKey: true, autoIncrement: true })
	id: number;

	@Column
	name: number;

	@HasMany(() => Transaction)
	transactions: Transaction[];
}
