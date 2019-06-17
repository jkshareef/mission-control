# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_17_194101) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "crews", force: :cascade do |t|
    t.string "name"
    t.string "skill"
    t.integer "cost"
    t.bigint "mission_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "expertise"
    t.string "gender"
    t.index ["mission_id"], name: "index_crews_on_mission_id"
  end

  create_table "destinations", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "distance"
    t.bigint "mission_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "object_source"
    t.index ["mission_id"], name: "index_destinations_on_mission_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "content"
    t.integer "resource_cost"
    t.bigint "mission_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "target_resource"
    t.boolean "acceleration"
    t.index ["mission_id"], name: "index_events_on_mission_id"
  end

  create_table "missions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "resources", force: :cascade do |t|
    t.integer "food"
    t.integer "oxygen"
    t.integer "fuel"
    t.integer "medicine"
    t.bigint "mission_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mission_id"], name: "index_resources_on_mission_id"
  end

  add_foreign_key "crews", "missions"
  add_foreign_key "destinations", "missions"
  add_foreign_key "events", "missions"
  add_foreign_key "resources", "missions"
end
