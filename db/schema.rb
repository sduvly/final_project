# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_06_155658) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "business_products", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.bigint "business_id", null: false
    t.bigint "product_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.index ["business_id"], name: "index_business_products_on_business_id"
    t.index ["product_id"], name: "index_business_products_on_product_id"
  end

  create_table "businesses", force: :cascade do |t|
    t.string "business_name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_businesses_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "description"
    t.integer "stock"
    t.string "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "purchases", force: :cascade do |t|
    t.boolean "purchase"
    t.bigint "user_id", null: false
    t.bigint "business_product_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_product_id"], name: "index_purchases_on_business_product_id"
    t.index ["user_id"], name: "index_purchases_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.integer "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "business_products", "businesses"
  add_foreign_key "business_products", "products"
  add_foreign_key "businesses", "users"
  add_foreign_key "purchases", "business_products"
  add_foreign_key "purchases", "users"
end
