import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { uuid } from './util/uuid';
import * as moment from 'moment';
import {
  Thread,
  Message,
  User
} from './models';
import {
  ThreadActions,
  MessageActions
} from './actions';

// the person using the app is Juliet
const me: User = {
  id: uuid(),
  name: 'Juliet',
  avatarSrc: require('images/avatars/female-avatar-1.png')
};

const ladycap: User = {
  id: uuid(),
  name: 'Lady Capulet',
  avatarSrc: require('images/avatars/female-avatar-2.png')
};

const echo: User = {
  id: uuid(),
  name: 'Echo Bot',
  avatarSrc: require('images/avatars/male-avatar-1.png')
};

const rev: User = {
  id: uuid(),
  name: 'Reverse Bot',
  avatarSrc: require('images/avatars/female-avatar-4.png')
};

let wait: User = {
  id: uuid(),
  name: 'Waiting Bot',
  avatarSrc: require('images/avatars/male-avatar-2.png')
};

let tLadycap: Thread = {
  id: 'tLadycap',
  name: ladycap.name,
  avatarSrc: ladycap.avatarSrc
};

let tEcho: Thread = {
  id: 'tEcho',
  name: echo.name,
  avatarSrc: echo.avatarSrc
};

let tRev: Thread = {
  id: 'tRev',
  name: rev.name,
  avatarSrc: rev.avatarSrc
};

let tWait: Thread = {
  id: 'tWait',
  name: wait.name,
  avatarSrc: wait.avatarSrc
};

export default function ChatExampleData(store: Store<AppState>) {
  const threadActions = new ThreadActions();
  const messageActions = new MessageActions();

  // create a new thread
  store.dispatch(threadActions.add(tLadycap));
  store.dispatch(threadActions.add(tEcho));
  // store.dispatch(threadActions.add(tRev));
  // store.dispatch(threadActions.add(tWait));

  // store.dispatch(messageActions.sendMessageOnThread(tLadycap, {
  //   author: me,
  //   sentAt: moment().subtract(45, 'minutes').toDate(),
  //   text: 'Yet let me weep for such a feeling loss.',
  //   thread: tLadycap
  // }));
  // store.dispatch(messageActions.sendMessageOnThread(tLadycap, {
  //   author: ladycap,
  //   sentAt: moment().subtract(20, 'minutes').toDate(),
  //   text: 'So shall you feel the loss, but not the friend which you weep for.',
  //   thread: tLadycap
  // });

  // // add messages to that thread


}
