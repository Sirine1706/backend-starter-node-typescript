import { Request } from 'express';
import User from '../database/model/User';
import Keystore from '../database/model/KeyStore';
import { Post } from '../database/model/Post';

declare interface DataRequest extends Request {
  post: Post;
}
declare interface PublicRequest extends Request {
  apiKey: string;
}

declare interface RoleRequest extends PublicRequest {
  currentRoleCode: string;
}

declare interface ProtectedRequest extends RoleRequest {
  user: User;
  accessToken: string;
  keystore: Keystore;
}
declare interface ProtectedDataRequest extends ProtectedRequest {
  post: Post;
}

declare interface Tokens {
  accessToken: string;
  refreshToken: string;
}
declare interface ApiOptions {
  deleted?: boolean;
  isPaging?: boolean;
}
