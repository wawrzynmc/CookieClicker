import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (err) {
        console.log(err);
    }
};

export { connectMongo };
