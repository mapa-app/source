import mongoose from 'mongoose';
export interface Role extends mongoose.Document {
  type: any;
}
const roleSchema = new mongoose.Schema({
  type: {
    type: String,
    enum : ['mum','dad',"child"],
    default: 'child'
  }
});



export const roleModel = mongoose.model<Role>('role', roleSchema);
