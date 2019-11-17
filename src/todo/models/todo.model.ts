import { BaseModel, schemaOptions } from '../../shared/base.module';
import { TodoLevel } from './todo-level.enum';
import { ModelType , prop } from 'typegoose';

export class Todo extends BaseModel<Todo> {
 @prop({ required: [true, 'Content is required']})
  content: string;
 @prop({enum: TodoLevel, default: TodoLevel.Normal})
  level: TodoLevel;
 @prop({default: false})
  isCompleted: boolean;

 static get model(): ModelType<Todo> {
   return new Todo().getModelForClass(Todo, {schemaOptions});
 }
  static get modelName(): string {
   return this.model.modelName;
  }
}
