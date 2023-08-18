import { AssignmentInterface } from 'interfaces/assignment';
import { QuestionInterface } from 'interfaces/question';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SurveyInterface {
  id?: string;
  title: string;
  description?: string;
  status: string;
  organization_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  assignment?: AssignmentInterface[];
  question?: QuestionInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    assignment?: number;
    question?: number;
  };
}

export interface SurveyGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  organization_id?: string;
  user_id?: string;
}
