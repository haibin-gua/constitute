<template>
  <div>
    <ul class="box">
      <li>
        <router-link to='Ip'>
          <div class="icon">
            <i style="font-size:.5rem;" class="iconfont icon-IP"></i>
          </div>
          <div class="txt">IP地址查询</div>
        </router-link>
      </li>
      <li>
        <router-link to="School">
          <div class="icon">
            <i style="font-size:.5rem;" class="iconfont icon-IP"></i>
          </div>
          <div class="txt">大学查询</div>
        </router-link>
      </li>
      <li>
        <router-link to="Express">
          <div class="icon">
            <i style="font-size:.5rem;" class="iconfont icon-IP"></i>
          </div>
          <div class="txt">物流查询</div>
        </router-link>
      </li>
      <li>
        <router-link to="Phone">
          <div class="icon">
            <i style="font-size:.5rem;" class="iconfont icon-IP"></i>
          </div>
          <div class="txt">手机号查询</div>
        </router-link>
      </li>
      <li>
        <router-link to="Word">
          <div class="icon">
            <i style="font-size:.5rem;" class="iconfont icon-IP"></i>
          </div>
          <div class="txt">单词查询</div>
        </router-link>
      </li>
      <li>
        <router-link to='JOke'>
          <div class="icon">
            <i style="font-size:.5rem;" class="iconfont icon-IP"></i>
          </div>
          <div class="txt">开心一笑</div>
        </router-link>
      </li>
      <li>
        <router-link to="Cartoon">
          <div class="icon">
            <i style="font-size:.5rem;" class="iconfont icon-IP"></i>
          </div>
          <div class="txt">二次元</div>
        </router-link>
      </li>
      <li>
        <router-link to="Ep">
          <div class="icon">
            <i style="font-size:.5rem;" class="iconfont icon-IP"></i>
          </div>
          <div class="txt">全国疫情</div>
        </router-link>
      </li>
      <li>
        <div class="icon">
          <i style="font-size:.5rem;" class="iconfont icon-IP"></i>
        </div>
        <div class="txt">ddf</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .box>li{
    float: left;
    width: 24.8%;
    height: .8rem;
    border:1px solid red;
    text-align: center;
    border-left: none;
    background: #ffffff;
  }
  .box>li:nth-child(4n){
    border-right: none;
  }
  .box .txt{
    font-size: .18rem;
    margin-top:.05rem;
  }
</style>
