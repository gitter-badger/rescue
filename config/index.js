module.exports = {
    "SECRET": process.env.SECRET || 'SECRET_for_testing',
    "PORT": process.env.PORT || '7000',
    "MONGO_URL": process.env.MONGO_URL || 'mongodb://localhost/rescue',
    "CRYPTO_ITERATIONS": process.env.CRYPTO_ITERATIONS || 1000,
    "CRYPTO_KEY_LENGTH": process.env.CRYPTO_KEY_LENGTH || 64
};