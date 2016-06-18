'use strict';

import mongoose from 'mongoose';

var ThingSchema = new mongoose.Schema({
  company: String,
  position: String
});

export default mongoose.model('Thing', ThingSchema);
