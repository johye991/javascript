/*-----------------------------------------
두 수 a,b에 대한 절대값을 반환하는 함수임 _0918
-----------------------------------------*/

//자주할 업무는 재사용을 위해 함수로 정의
//두 수 a,b에 대한 절대값을 반환하는 함수
function getAbs(a,b){
//두 수를 대상으로 절대값을 구하는 식
return Math.abs(a-b);//함수를 호출한 실행부가 결과를 가지고 
                        //호출한 곳으로 되돌아감
}     

/*-----------------------------------------
랜덤 구하는 함수
n을 넣으면 0~n까지포함해서
 랜덤한 수를 반환하는 함수 _0918
-----------------------------------------*/
function getRandom(n){
    //3
    var r = Math.random(); //1보다 작은 실수 0.0xxxx~ 0.9xxxxx
    return Math.floor((n+1) * r); //소수점을 버린다 floor(바닥값)
}
/*-----------------------------------------
랜덤 구하는 함수2
ex)7과 23사이의 랜덤값 반환_0918
-----------------------------------------*/
/*최대값에서 최소값을 빼고 1을 더해야 0부터 시작하기 때문에 */
function getRandomBetween(min,max){
    //일단 최소값 이상은 무조건 반환되야 한다
    //return Math.floor(Math.random()*(max-min+1 ) )+ min; 아래와 같은 말
    return getRandom(max-min)+min;
}
/*-----------------------------------------
숫자에 0붙인 날짜 처리
매개변수, 즉 인수로 수를 전달하면, 함수내에서 알아서
0을 붙여줌
(두자리 한자리 판단 마저도 여기서 해준다) _0918
-----------------------------------------*/
function getZeroDate(n){
    //n이 10보다 작으면 0을 접두어로 붙이자
    if (n<10){
        n = "0" + n
    }
    return n;
    

} 
/*-----------------------------------------------
아래의 함수는, 두 물체간 충돌여부를 판단해주는 함수이다.
box1 : 판단 대상 요소1 ex) div , img, span....
box2 : 판단 대상 요소2 ex) div , img, span....
_1005
-----------------------------------------------*/
function collisionCheck(box1, box2) {
    //두물체간 충돌 여부 판단 
    var x1=parseInt(box1.style.left);
    var width1=parseInt(box1.style.width);
    var y1=parseInt(box1.style.top);
    var height1=parseInt(box1.style.height);
    
    var x2=parseInt(box2.style.left);
    var width2=parseInt(box2.style.width);
    var y2=parseInt(box2.style.top);
    var height2=parseInt(box2.style.height);


/*--------------------------------------------------------------------
조건1)x축 충돌: me의 x축+width1를 더한값은 target의 x2축 이상일 경우
조건2)y축 충돌: me의 y축+height1를 더한 값이  target의 y2축 이상일 경우
조건3)me의  y1값은 target의  y2에 height2를 더한값보다 같거나 작아야 함
조건4)me의  x1값은 target의  x2에 width2를 더한값보다 같거나 작아야 함
--------------------------------------------------------------------*/
    var result = (x1+width1 >= parseInt(box2.style.left))
    && (y1+height1)>=parseInt(box2.style.top) 
    && y1 <=(y2+height2) 
    && x1 <=(x2+width2)  

   return result;
}


/*-----------------------------------------------------
해당월의 총 일수 구하기== 마지막날 구하기
mm= 구하고 싶은 월 (주의 : 자바스크립트에서 월은 0 부터 시작하므로
    10월을 구하고 싶다면 9를 넘거야 함)
---------------------------------------------------- */
   function getLastDate(yy,mm){//월수 넘기기
        var d = new Date();//현재 날짜, 조작이 가해져야 함
        d.setFullYear(yy);//현재날짜의 연도 
        d.setMonth(mm+1);//일단 다음달로 넘어간다, 0을 대입하여 이전달의 마지막일을 구하려고
        d.setDate(0);//다시 이전달로 넘어오면서 마지막날을 가리킴
        return d.getDate();//마지막날을 반환

    
    }
















