import { Column, Model, Table, BelongsTo, ForeignKey, DataType } from 'sequelize-typescript';
import { Currency } from '../currency/currency.entity';
import { TransactionStatus } from '../transaction-status/transaction-status.entity';

@Table
export class Transaction extends Model {
	@Column({ primaryKey: true, autoIncrement: true })
	id: number;

	@Column({ type: DataType.DECIMAL(10, 2) })
	public amount: number;

	@ForeignKey(() => Currency)
	@Column
	public currency: string;

	@BelongsTo(() => Currency)
	public currencyInfo: Currency;

	@Column({ field: 'transaction_date', type: DataType.DATE })
	public transactionDate: Date;

	@ForeignKey(() => TransactionStatus)
	@Column
	public status: number;

	@BelongsTo(() => TransactionStatus)
	public statusInfo: TransactionStatus;
}
