import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { TransactionModule } from './transaction/transaction.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { configDev } from './core/database/config';
import { TransactionStatusModule } from './transaction-status/transaction-status.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, load: [configDev] }),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'public')
		}),
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: configDev
		}),
		TransactionModule,
		TransactionStatusModule,
		CurrencyModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
