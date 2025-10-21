-- CreateTable
CREATE TABLE "Restaurants" (
    "rest_id" TEXT NOT NULL,
    "rest_title" TEXT NOT NULL,
    "rest_address" TEXT NOT NULL,
    "rest_time" TEXT NOT NULL,
    "rest_img_url" TEXT NOT NULL,
    "rest_is_one_free" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurants_rest_id_key" ON "Restaurants"("rest_id");
