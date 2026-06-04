import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    contant: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], //  Array of subtodo
  },
  { timnestmps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
