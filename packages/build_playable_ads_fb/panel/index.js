// panel/index.js, this filename needs to match the one registered in package.json
Editor.Panel.extend({
  style: `
    :host {
      display: flex;
      flex-direction: column;
      margin: 5px;
    }

    .top {
      height: 30px;
    }

    .middle {
      flex: 1;
      overflow: auto;
    }

    .bottom {
      height: 30px;
    }
  `,

  template: `
    <div class="top">
      Step:
    </div>

    <div class="middle layout vertical">
    <div>1.<span>Project -> Project Setting... -> Module Config</span></div>
    <div>1.1.<span> Select only module you need (optimize size)</span></div>
    <div>2.<span>Project -> Build...</span></div>
    <div>2.1.<span>Tile: Bất kì</span></div>
    <div>2.2.<span>Platfom: Web Mobile</span></div>
    <div>2.3.<span>Build Path: ./build</span></div>
    <div>2.4.<span>StartScene: scene sẽ chạy playable</span></div>
    <div>2.5.<span>Include Scene: chỉ chon 1 scene giống ở trên, để giảm dung lượng</span></div>
    <div>2.6.<span>Select All: Không chọn</span></div>
    <div>2.7.<span>Inline all SpriteFrames: Không chọn</span></div>
    <div>2.8.<span>Merge All json...: Không chọn</span></div>
    <div>2.9.<span>MD5 cache: Không chọn</span></div>
    <div>2.10.<span>Orientation: Portait</span></div>
    <div>2.11.<span>vConsole: Chọn(nếu muốn xem log trên playable) public(không chọn)</span></div>
    <div>2.12.<span>Debug: Chọn(nếu muốn xem log) public(Nên không chọn để giảm dung lượng)</span></div>
    <div>2.13.<span>Source Map: không chọn</span></div>
    </div>
    <div>Thông báo: <span id="label"></span></div>
    <hr/>
    <div>author: <span>trunglm4-dn-gsn</span></div>
    <div class="bottom layout horizontal end-justified">
      <ui-button id="btn" class="green">Build</ui-button>
    </div>
  `,
  // <ui-text-area resize-v value=""></ui-text-area>
  // <ui-markdown class="flex-1"></ui-markdown>
  // element and variable binding
  $: {
    btn: '#btn',
    label: '#label',
  },
  // method executed when template and styles are successfully loaded and initialized
  ready () {
    this.$btn.addEventListener('confirm', () => {
      Editor.Ipc.sendToMain('build_playable_ads_fb:build-main');
    });
  },

  // register your ipc messages here
  messages: {
    'build_playable_ads_fb:hello' (event) {
      this.$label.innerText = 'Hello!';
    }
  }
});