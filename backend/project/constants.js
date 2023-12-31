module.exports = {
    DB_NAME: "uber",

    // Users Table
    USERS_PK: "user_id_pk",
    USERS_TABLE: "users",
    USERS_FIRST_NAME: "first_name",
    USERS_LAST_NAME: "last_name",
    USERS_PHONE_NUMBER: "phone_number",
    USERS_USERNAME: "username",
    USERS_PASSWORD: "password",
    USERS_ADMIN: "admin",
    USERS_DRIVER_R: "driver_rating",
    USERS_USER_R: "user_rating",

    // Address Table
    ADDRESS_TABLE: "address",
    ADDRESS_PLACE_ID_PK: "place_id_pk",
    ADDRESS_USER_ID_FK: "user_id_fk",
    ADDRESS_APT_NUMBER: "apt_number",
    ADDRESS_CITY: "city",
    ADDRESS_STREET_NAME: "street_name",
    ADDRESS_STATE: "state",
    ADDRESS_ZIP_CODE: "zip_code",
    ADDRESS_COUNTRY: "country",
    ADDRESS_CORD: "coordinates",

    // Car Details Table
    CARS_TABLE: "car_details",
    CARS_PK: "car_id_pk",
    CARS_USER_ID_FK: "user_id_fk",
    CARS_SEATS: "seats",
    CARS_NUMBER: "number",
    CARS_MAKE: "make",
    CARS_MODEL: "model",
    CARS_COLOR: "color",
    CARS_IMAGE_ADDR: "image_addr",

    // Ride Table
    RIDE_TABLE: "ride",
    RIDE_PK: "ride_id_pk",
    RIDE_DRIVER_ID_FK: "driver_id_fk",
    RIDE_CAR_ID_FK: "car_id_fk",
    RIDE_SEATS: "seats_available",
    RIDE_DEPARTURE: "departure_time",
    RIDE_COMPLETED: "ride_completed",
    RIDE_SOURCE: "source_addr",
    RIDE_SOURCE_ID: "source_id",
    RIDE_DEST: "dest_addr",
    RIDE_DEST_ID: "dest_id",

    // Ride Details Table
    RIDE_D_TABLE: "ride_details",
    RIDE_D_RID_FK: "ride_id_fk",
    RIDE_D_UID_FK: "user_id_fk",
    RIDE_D_USERNAME: "username",
    RIDE_D_RIDE_COMPLETED: "ride_completed",
    RIDE_D_SOURCE: "source_addr",
    RIDE_D_SOURCE_ID: "source_id",
    RIDE_D_START_TIME: "start_time",
    RIDE_D_DEST: "dest_addr",
    RIDE_D_DEST_ID: "dest_id",
    RIDE_D_END_TIME: "end_time",
    RIDE_D_CREVIEW: "customer_review",
    RIDE_D_CRATE: "customer_rating",
    RIDE_D_DREVIEW: "driver_review",
    RIDE_D_DRATE: "driver_rating",
};
