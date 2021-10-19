import { all, fork } from "redux-saga/effects";
import { login, renewToken } from "../../Auth/Saga/AuthSaga";

export default function*() {
  yield all([fork(login), fork(renewToken)]);
}
