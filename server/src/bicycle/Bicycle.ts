import mongoose from 'mongoose';

const Bicycle = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  wheelSize: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
});

export default mongoose.model('Bicycle', Bicycle);
