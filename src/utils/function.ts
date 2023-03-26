import {CallLog} from './consts';

export const getIconCallLog = (typeCallLog: CallLog) => {
  switch (typeCallLog) {
    case CallLog.InComing:
      return 'call-received';
    case CallLog.OutGoing:
      return 'call-made';
    case CallLog.Missed:
      return 'call-missed-outgoing';
  }
};

export const getColorCallLog = (typeCallLog: CallLog) => {
  switch (typeCallLog) {
    case CallLog.InComing:
      return 'blue';
    case CallLog.OutGoing:
      return 'green';
    case CallLog.Missed:
      return 'red';
  }
};
