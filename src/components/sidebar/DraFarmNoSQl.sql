// Users Collection
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String, // Hashed
  fullName: String,
  phoneNumber: String,
  role: String, // "farmer", "admin", etc.
  registrationDate: Date,
  lastLogin: Date,
   authMethod:String ,// "google", "facebook", "email"
  googleId:String ,  // Lưu nếu đăng nhập bằng Google
  facebookId:String, // Lưu nếu đăng nhập bằng Facebook
  isEmailVerified: Boolean,
  verificationToken: String
}

// Farms Collection
{
  _id: ObjectId,
  userId: ObjectId, // Reference to Users Collection
  farmName: String,
  location: {
    address: String,
    coordinates: [Number, Number] // [longitude, latitude]
  },
  size: Number, // in hectares
  soilType: String,
  createdAt: Date,
  updatedAt: Date
}

// Plants Collection
{
  _id: ObjectId,
  farmId: ObjectId, // Reference to Farms Collection
  cropType: String,
  variety: String,
  plantId: String,
  botanicalName: String,
  startBeforeLastFrost: Number, // in weeks
  daysToEmerge: Number,
  plantSpacing: Number, // in cm
  rowSpacing: Number, // in cm
  plantingDepth: Number, // in cm
  averageHeight: Number, // in cm
  soilConditions: String,
  pruningDetails: String,
  plantingDate: Date,
  expectedHarvestDate: Date,
  status: String, // "active", "harvested", "diseased", etc.
  notes: String,
  createdAt: Date,
  updatedAt: Date
}

// Irrigation Collection
{
  _id: ObjectId,
  plantId: ObjectId, // Reference to Plants Collection
  scheduledDate: Date,
  actualDate: Date,
  duration: Number, // in minutes
  waterAmount: Number, // in liters
  method: String, // "drip", "sprinkler", etc.
  notes: String,
  createdBy: ObjectId, // Reference to Users Collection
  createdAt: Date,
  updatedAt: Date
}

// Harvests Collection
{
  _id: ObjectId,
  plantId: ObjectId, // Reference to Plants Collection
  harvestDate: Date,
  quantity: Number, // in kg
  quality: String, // "excellent", "good", "fair", "poor"
  notes: String,
  createdBy: ObjectId, // Reference to Users Collection
  createdAt: Date,
  updatedAt: Date
}

// Weather Data Collection
{
  _id: ObjectId,
  farmId: ObjectId, // Reference to Farms Collection
  date: Date,
  temperature: Number,
  humidity: Number,
  rainfall: Number,
  windSpeed: Number,
  createdAt: Date
}

// Tasks Collection
{
  _id: ObjectId,
  farmId: ObjectId, // Reference to Farms Collection
  title: String,
  description: String,
  dueDate: Date,
  status: String, // "pending", "in-progress", "completed"
  assignedTo: ObjectId, // Reference to Users Collection
  createdBy: ObjectId, // Reference to Users Collection
  createdAt: Date,
  updatedAt: Date
}

// Notifications Collection
{
  _id: ObjectId,
  userId: ObjectId, // Reference to Users Collection
  type: String, // "irrigation", "harvest", "task", etc.
  message: String,
  isRead: Boolean,
  createdAt: Date
}

// Reports Collection
{
  _id: ObjectId,
  farmId: ObjectId, // Reference to Farms Collection
  reportType: String, // "weekly", "monthly", "harvest", etc.
  startDate: Date,
  endDate: Date,
  data: Object, // Flexible structure to store various report data
  createdBy: ObjectId, // Reference to Users Collection
  createdAt: Date
}