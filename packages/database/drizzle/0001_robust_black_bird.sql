ALTER TABLE "transactions" ADD COLUMN "type" "transaction_type" NOT NULL;--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "updated_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
CREATE INDEX "idx_transactions_category_id" ON "transactions" USING btree ("category_id");--> statement-breakpoint
ALTER TABLE "transactions" DROP COLUMN "Enum";