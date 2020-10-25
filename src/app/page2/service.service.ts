import { Injectable } from '@angular/core';
import {Inf} from '../inf';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public getInf() {
    let InfList:Inf[];
    InfList=[
      new Inf( 'Championship of England', 'Liverpool have won a phenomenal 19 League titles in England. The first was produced in the 1900-01 season, the last in the 2019-20 season under Jurgen Klopp, which followed 30 years and 58 days after the previous title won in the 1989-90 season under Sir Kenny Dalglish.',
        'https://liverpoolfc.ru/templates/yootheme/cache/premiereshipwinners2020-eed099f4.jpeg'),
      new Inf('Champions League','By this point, Liverpool had become European club Champions 6 times - more than any other British team. The first three wins were won under the leadership of Bob Paisley: in 1977, 1978 and 1981. In 1984, Liverpool became European club Champions under the leadership of Joe Fagan, and in 2005, the team was led to victory by Rafael Benties. The last Champions League Cup was lifted by Jurgen Klopp\'s team in 2019. Liverpool have also reached the final of the tournament three times: in 1985, 2007 and 2018.',
      'https://liverpoolfc.ru/templates/yootheme/cache/championsleague%202005-960f9282.jpeg'),
      new Inf('UEFA Cup',' Bill Shankly, Bob Paisley, and Gerard Houllier each led the team to victory: in 1973, 1976, and 2001, respectively. The last victory was obtained in one of the most incredible European final when Liverpool beat Alaves in Spanish with a score of 5-4 in the added time.',
        'https://liverpoolfc.ru/templates/yootheme/cache/uefacup-07a0d6bb.jpeg'),
      new Inf('FA Cup','The first of 7 FA cups was won by bill Shankly\'s wards when Leeds United were beaten at Wembley. 1965, 1974, 1986, 1989, 1992, 2001, 2006',
        'https://liverpoolfc.ru/templates/yootheme/cache/englandcup-b016026b.jpeg'),
      new Inf('League cup','Liverpool is the record holder for the number of League cups won, as well as for the number of participation in the final matches of the tournament, of which it currently has 12. The last victory in the tournament so far dates back to 2012, when Cardiff city were beaten in the final. 1981, 1982, 1983, 1984, 1995, 2001, 2003, 2012',
        'https://liverpoolfc.ru/templates/yootheme/cache/leaguecup-2dd359b7.jpeg'),
      new Inf('UEFA super cup','The first two WINS in the UEFA super Cup followed the triumphs in the UEFA Cup, and the third and fourth came after winning the KEC / Champions League. A remarkable fact: the winning final of 2019 was judged by a women\'s team of referees for the first time in the history of major European football competitions. 1977, 2001, 2005, 2019',
        'https://liverpoolfc.ru/templates/yootheme/cache/uefasupercup-41aff54b.jpeg'),

  ]
    return InfList;
  }
}
