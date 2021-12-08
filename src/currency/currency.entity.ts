import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Currency extends Model {
	@Column({ primaryKey: true, field: 'alpha_code', type: DataType.STRING(3) })
	alphaCode: string;

	@Column({ field: 'numeric_code', type: DataType.DECIMAL(3, 0) })
	numericCode: number;

	@Column({ field: 'numeric_code', type: DataType.STRING(50) })
	currencyName: number;
}
