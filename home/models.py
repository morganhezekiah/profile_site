from django.db import models

class Message(models.Model):
    message = models.TextField(null=False, blank=False)
    name = models.CharField(null=False, max_length=50, blank=False)
    subject = models.TextField(null=False, blank=False)
    email = models.EmailField(null=False, blank=False)

    def __str__(self) -> str:
        return str(self.pk)