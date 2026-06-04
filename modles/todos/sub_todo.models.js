import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

export const sunTodo = mongoose.model('Todo, todoSchema');
