ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN "Enum";--> statement-breakpoint
ALTER TABLE "transactions" DROP COLUMN "type";--> statement-breakpoint
DROP TYPE "public"."transaction_type";