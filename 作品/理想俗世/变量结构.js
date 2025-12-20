import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

export const Schema = z.object({
  时间系统: z.object({
    当前时间: z.string().describe('格式：14:30'),
    当前阶段: z.enum(['清晨', '上午', '中午', '下午', '傍晚', '深夜'])
  }),

  世界状态: z.object({
    积分: z.coerce.number().describe('用户拥有的资源兑换积分'),
    当前区域: z.string().describe('当前所在的城市区域')
  }),

  好感度: z.object({
    沈馨: z.object({
      数值: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      等级: z.enum(['陌生', '点头之交', '心仪客人', '入幕之宾', '灵魂伴侣'])
    }),
    刘奈妲: z.object({
      数值: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      等级: z.enum(['陌生', '普通客户', '优质客户', '合伙人', '裙下之臣'])
    }),
    萧潇: z.object({
      数值: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      等级: z.enum(['陌生', '大哥哥', '最喜欢的大哥哥', '玩伴'])
    }),
    祝伊伊: z.object({
      数值: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      等级: z.enum(['陌生', '影迷', '志同道合者', '亲密道友'])
    })
  }),

  角色状态: z.object({
    user状态: z.object({
      身体: z.enum(['健康', '兴奋', '疲惫', '虚脱']),
      心情: z.enum(['平静', '愉悦', '亢奋', '空虚']),
      当前位置: z.string()
    }),
    沈馨状态: z.object({
      当前着装: z.string(),
      身体状态: z.string()
    }),
    刘奈妲状态: z.object({
      乳汁存量: z.enum(['充盈', '饱满', '胀痛', '排空']),
      经营状态: z.string()
    }),
    萧潇状态: z.object({
      网络人气: z.coerce.number(),
      当前欲望: z.string()
    }),
    祝伊伊状态: z.object({
      暴露等级: z.enum(['全副武装', '清凉', '极度诱惑', '完全赤裸']),
      狂热度: z.coerce.number()
    })
  })
});

$(() => {
  registerMvuSchema(Schema);
})
