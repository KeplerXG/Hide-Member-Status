/**
 * @name HideMemberStatus
 * @author Kepler
 * @version 1.0.0
 * @description Hides all status messages under usernames in the member list.
 * @website none
 */

module.exports = class HideMemberStatus {
  start() {
    this.hideStatusMessages();
    this.observer = new MutationObserver(() => this.hideStatusMessages());
    this.observer.observe(document.body, { childList: true, subtree: true });
  }

  stop() {
    if (this.observer) this.observer.disconnect();
    this.showStatusMessages();
  }

  hideStatusMessages() {
    const memberItems = document.querySelectorAll('[class*="member"]');
    memberItems.forEach(item => {
      const status = item.querySelector('[class*="subText"], [class*="activity"], [class*="customStatus"]');
      if (status) {
        status.style.display = 'none';
      }
    });
  }

  showStatusMessages() {
    const memberItems = document.querySelectorAll('[class*="member"]');
    memberItems.forEach(item => {
      const status = item.querySelector('[class*="subText"], [class*="activity"], [class*="customStatus"]');
      if (status) {
        status.style.display = '';
      }
    });
  }
};
