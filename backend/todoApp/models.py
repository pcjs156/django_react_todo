from django.db import models


class TodoBoard(models.Model):
    name = models.CharField(max_length=50, null=False,
                            blank=False, default='이름 없는 보드', verbose_name='보드 이름')

    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='생성 일자/시각')

    modified_at = models.DateTimeField(
        null=True, blank=True, verbose_name='수정 일자/시각')

    class Meta:
        verbose_name = 'TodoBoard'
        verbose_name_plural = 'TodoBoards'

    def __str__(self):
        return self.name


class Todo(models.Model):
    board = models.ForeignKey(
        TodoBoard, verbose_name='대상 보드', on_delete=models.CASCADE)

    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='생성 일자/시각')

    content = models.TextField(null=False, blank=False, verbose_name='내용')

    class Meta:
        verbose_name = 'Todo'
        verbose_name_plural = 'Todos'
