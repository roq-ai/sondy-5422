import { SurveyInterface } from 'interfaces/survey';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AssignmentInterface {
  id?: string;
  status: string;
  survey_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  survey?: SurveyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  survey_id?: string;
  user_id?: string;
}
