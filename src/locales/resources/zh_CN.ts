import chat from '../default/chat';
import common from '../default/common';
import empty from '../default/empty';
import error from '../default/error';
import market from '../default/market';
import plugin from '../default/plugin';
import setting from '../default/setting';
import welcome from '../default/welcome';

const resources = {
  chat,
  common,
  empty,
  error,
  market,
  plugin,
  setting,
  welcome,
} as const;

export default resources;
