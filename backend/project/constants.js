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
    ADDRESS_PK: "address_pk",
    ADDRESS_USER_ID_FK: "user_id_fk",
    ADDRESS_APT_NUMBER: "apt_number",
    ADDRESS_STREET_NAME: "street_name",
    ADDRESS_STATE: "state",
    ADDRESS_ZIP_CODE: "zip_code",
    ADDRESS_COUNTRY: "country",
    ADDRESS_PLACE_ID: "place_id",
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
};